# Cadeau - Full-Stack E-commerce Website WIP

Cadeau is a full-stack e-commerce website application built with Supabase for data storage, React for the frontend, and Express framework for the backend. "Cadeau" is the French word for "to give," and it aims to facilitate the exchange and purchase of pre-owned shoes at affordable prices. While currently a relatively simple end-to-end e-commerce application, more features are planned for future implementation.

## Features

- Landing Page.
- User registration and login process.
- Display of numerous product items.
- Display of individual product pages
- Ability to add items to cart.
- Ability to checkout with Stripe test mode.
- Ability for customers to view their order history.

## Technologies Used

- Frontend: HTML, TailwindCSS, React, and Vue.
- Backend: Express.js and Node.js
- Data: Supabase
- Libraries: React-dom, React-Router-Dom, Passport, Bcrypt, Material Tailwind, and Mui.

## Visuals

**Landing Page**
![HomePage](https://ezxeabxdawiisodycekr.supabase.co/storage/v1/object/public/CadeauImages/localhost_5173_%20(1)%20(1).png?t=2024-03-27T12%3A33%3A31.729Z)

**Cart Page**
![CartPage](https://ezxeabxdawiisodycekr.supabase.co/storage/v1/object/public/CadeauImages/localhost_5173_cart%20(1).png?t=2024-03-27T12%3A45%3A13.189Z)

## Installation
_You may get started with installing and starting the app below_

1. Get your supabaseKey and supabaseURL at [Supabase Website](https://supabase.com/)
2. Get your private Stripe key at [Stripe Website](https://stripe.com/)
3. Clone the repo
   ```sh
   git clone https://github.com/Joyeleke/cadeau.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your keys in `.env`
   ```js
   SUPABASE_KEY=your_key
   SUPABASE_URL=your_key
   JWT_SECRET=your_secret
   STRIPE_KEY=your_key
6. On the terminal, run node server.js to get backend server started
   ```sh
   node server.js
   ```
7. On another terminal instance, run npm run dev inside the view folder to get frontend running
    ```sh
   npm run dev
   ```
8. You should be all good to go!

## Support

For support on issues related to this project, feel free to add a message on an existing pull request or create a new one.

## Contributing

Contributions are highly and greatly welcomed. Feel free to pop in anywhere you like.

If you have a suggestion that would make this better, please fork the repo and create a pull request. 

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

