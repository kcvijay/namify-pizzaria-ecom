## Namify Delivery Fee Calculator with Cart

### A task for Wolt Trainee 2024 Program

### Tech-stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Jest

The application has a few more features than the requirements:
- Fully responsive to all screen-sizes.
- Users can choose food products from the homepage.
- Chosen products are added to Cart.
- Products can be removed from the Cart.
- Cart is saved to browser local storage.
- Addresses with distance are put in dropdown list.

Total delivery fee consists of 3 separate fees: Base Delivery Fee, Surcharge, and Bulk Fee. Requirements considered to calculate the total delivery fees are:

- If the total order amount exceeds 200 €, the total delivery fee is 0 €.
- If the order amount is less than 10 €, a surcharge is charged. The surcharge is the difference between 10 € and the order amount.
- If the order items are less than 4, the Base Delivery Fee is 0 €. Each more than 4 and less than 12 items add 0.50 €. More than 12 items add 1.20 € on the top of that.
- If the delivery distance is less than 1000 meters, the base delivery fee is 2 €. Every exceeding 500 meters adds 1 € to the base delivery fee.
- If the order is placed on Friday between 15 pm - 19 pm (Friday Rush), the delivery fee is multiplied by 1.20.
- The total delivery fee cannot be more than 15 €.

### Run in your machine

Download to your local directory and access through terminal
```shell
cd delivery-fee-calculator
```
Install dependencies
```shell
npm install
```
Run the development server
```shell
npm run dev
```
To run test
```shell
npm test
```

### Screenshots

![screenshot of the namify delivery calculator app](/public/namify-screenshot-1.webp)
---
![screenshot of the namify delivery calculator app](/public/namify-screenshot-2.webp)


### Thank you for visiting this page. 🙏

With ❤️ created by Vijay K.C.

Images source: Unsplash