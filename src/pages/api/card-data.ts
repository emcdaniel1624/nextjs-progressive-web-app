import { CardDataDto } from './../../shared/models/CardDataDto';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardDataDto[]>
) {
  res.status(200).json([
    {
      title:"Next.js",
      desc:"Find in-depth information about Next.js features and API.",
      link:"https://nextjs.org/docs"
    },
    {
      title:"Typescript",
      desc:"Find in-depth information about Typescript.",
      link:"https://www.typescriptlang.org/docs/"
    },
    {
      title:"Progressive Web Apps",
      desc:"Find in-depth information about progressive web applications.",
      link:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
    },
    {
      title:"Deploy",
      desc:"Instantly deploy your PWA to a public URL with Vercel.",
      link:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    }
  ])
}
