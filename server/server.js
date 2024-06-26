import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(
  "sk_test_51PQ92SP1a2QzSSXyoMOE8iavByohaUo3ywLdRjGg5RnM2ueyseqkXXjXef58fIQaHXyAusWnDvFXD9o5SRQxiKAt00rpT3sC7Q"
);

app.post("/api/create-checkout-session", async (request, response) => {
  try {
    const { amount } = request.body;
    console.log(amount);
    if (!amount || isNaN(amount)) {
      console.log("Invalid amount: ", amount);
      return response.status(400).send(`Invalid amount: ${amount}`);
    }
    const session = await stripe.checkout.sessions.create({
      success_url: "https://darus-salam-masjid-pbgcx.ondigitalocean.app",
      cancel_url: "https://darus-salam-masjid-pbgcx.ondigitalocean.app",
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "Donation",
            },
            unit_amount: amount,
            tax_behavior: "unspecified",
          },
          quantity: 1,
        },
      ],
    });

    return response.status(200).send({ url: session.url });
  } catch (error) {
    console.log(error);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Server is running on port: ${port}`));
