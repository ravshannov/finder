import axios from "axios"

const REACT_API = process.env.REACT_APP_API
const REACT_TOKEN = process.env.REACT_APP_TOKEN


const finder = axios.create({
  baseURL:REACT_API,
  headers:{Authorization:`token ${REACT_TOKEN}`}
})

export const searchUser = async (text)=>{
  const params = new URLSearchParams({
    q:text
  })
  const res = await finder.get(`/search/users?${params}`)
  return res.data.items
}

export const userData = async (login)=>{
  // const params = new URLSearchParams({
  //   sort:"created",
  //   per_page:10
  // })
  const [profile,repos] = await Promise.all([
    finder.get(`/users/${login}`),
    finder.get(`/users/${login}/repos`)
  ])
  return {profile:profile.data,repos:repos.data}
}










