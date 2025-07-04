import axios from 'axios';

const PINATA_API_KEY = 'f617103b471da72b4d4c';
const PINATA_SECRET_API_KEY = '8cc3686ff1130fa52b415f3baf346eb521cdfa3e08fee0de73ad85835934f6ec';

export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      formData,
      {
        maxBodyLength: 'Infinity',
        headers: {
          'Content-Type': `multipart/form-data`,
          'pinata_api_key': PINATA_API_KEY,
          'pinata_secret_api_key': PINATA_SECRET_API_KEY,
        },
      }
    );

    const cid = res.data.IpfsHash;
    console.log('Uploaded to IPFS with CID:', cid);
    return cid;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}
