import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import RNFS from 'react-native-fs';
import { Buffer } from 'buffer';

/**
 * Genera un PDF semplice con nome e cognome
 * @param {{nome: string, cognome: string}} data
 */
export async function generateSimplePDF(data) {
  try {
    // 1️⃣ Crea documento PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]); // A4 in punti

    // 2️⃣ Embed font
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // 3️⃣ Scrivi contenuto
    page.drawText('VERBALIA', {
      x: 50,
      y: 800,
      size: 24,
      font,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Nome: ${data.nome}`, { x: 50, y: 750, size: 14, font });
    page.drawText(`Cognome: ${data.cognome}`, { x: 50, y: 720, size: 14, font });

    // 4️⃣ Salva PDF in memoria
    const pdfBytes = await pdfDoc.save();

    // 5️⃣ Converte in base64
    const base64 = Buffer.from(pdfBytes).toString('base64');

    // 6️⃣ Definisci percorso del file
    const timestamp = Date.now();
    const path = `${RNFS.DownloadDirectoryPath}/Verbalia_${timestamp}.pdf`;

    // 7️⃣ Scrivi su disco
    await RNFS.writeFile(path, base64, 'base64');

    console.log('✅ PDF salvato in:', path);
  } catch (error) {
    console.error('❌ Errore PDF:', error);
  }
}

