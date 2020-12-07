import { API_URL } from "./constants";
import { IUser } from "./redux/auth/contracts"

export const login = async ({ login, password }: { login: string, password: string }): Promise<IUser | undefined> => {
  const response = await fetch(API_URL)
  const { users } = await response.json()
  return users.find((user: { login: string, password: string }) => user.login === login && user.password == password)
}
export const fetchNews = async () => {
  const response = await fetch(API_URL)
  const { news } = await response.json()
  return news
}
