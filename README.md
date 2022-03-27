This took me about 9 total hours from start to finish. However, I am not very happy with a lot of the code and would like to go back and redo some things. Additionally, I want to make a view for Plans and make them editable. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Notes 

1. Can we 1:1 use Prisma for our existing PostgreSQL databases? 
    * No, not really. The general structure could be kept but Prisma does not perfectly understand the data in its existing form. We would have to use a custom adapter to make that work. However, we would be able to replicate the structure of the databases 1:1. This would make the creation of new pages/endpoints very easy since we would have the ability to copy what we already have from the Gateway projects. 

2. Can we deploy with AWS Amplify? 
    * Yes, we can. However there are some caveats. Amplify is 1yr behind with Next so it's on version 11 and Next is currently on version 12. This means that we lose out on some speed improvements that have been made. Additionally, adding environment variables is a hassle since we have to use a workarond for Amplify. Overall, I did not find it as easy to use as Vercel, but it was doable. 

3. Is Tailwind viable? 
    * Yes, extremely viable. I found it very quick/easy to learn and a massive time-savings compared to writing custom css. 

4. Typescript vs. Javascript? 
    * I think that we should try to use typescript. I found javascript to be a little bit limiting for the task here. Being able to create a few interfaces would have been a nice boon to the readability and maintainability of the code. 

5. What I did leave on the table when it comes to trying Next? 
    * I wish that I tried out the [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes). I think they make the creation of views a whole lot easier and I just should have taken some time to try it. 
