import { MenuItemDTO } from './../../shared/models/MenuItemDto';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MenuItemDTO[]>
) {
  res.status(200).json([
    {
      name:"Home",
      route:"/home",
      mobileIcon:"home"
    },
    {
      name:"About",
      route:"/about",
      mobileIcon:"about"
    },
  ])
}