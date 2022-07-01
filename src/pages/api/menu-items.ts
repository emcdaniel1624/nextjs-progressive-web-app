import { MenuItemModel } from '../../shared/models/menu-item.model';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MenuItemModel[]>
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