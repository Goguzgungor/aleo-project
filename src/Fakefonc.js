const { Connection, PublicKey, Transaction, sendAndConfirmTransaction, SystemProgram, Keypair } = require('@solana/web3.js');

async function sendSolTransaction() {
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed'); // Solana devnet'e bağlan
  const payerAccount = Keypair.fromSecretKey(new Uint8Array([your_payer_secret_key_here])); // Gönderen hesap anahtarı

  // Alıcı hesap
  const receiverPublicKey = new PublicKey('receiver_public_key_here'); // Alıcı hesap adresi

  // İşlem oluştur
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: payerAccount.publicKey,
      toPubkey: receiverPublicKey,
      lamports: 1000000, // Gönderilecek miktar
    })
  );

  // İşlemi gönder ve onayla
  const signature = await sendAndConfirmTransaction(connection, transaction, [payerAccount]);
  console.log('Transaction confirmed. Signature:', signature);
}

export default sendSolTransaction();
