import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook';

export default async function handler(req, res) {

//authenticating the webhook
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME].toString();
    if (
      !isValidSignature(
        JSON.stringify(req.body),
        signature,
        process.env.SANITY_WEBHOOK_SECRET
      )
    )
      return res.status(401).json({ msg: 'Invalid request!' });

    //getting payload
    const { slug } = req.body;
    await res.revalidate(`/meetup/`);
    await res.revalidate(`/meetup/${slug}`);
    
    res.status(200).json({ msg: 'Product pages revalidated.' });
  } catch (error) {
    res.status(500).json({ err: 'Something went Wrong!' });
  }
};
