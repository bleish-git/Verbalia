import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import RNFS from 'react-native-fs';
import { Buffer } from 'buffer';

/**
 * PDF del form semplice
 */
export async function generateSimplePDF(data) {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]);

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText('VERBALIA - FORM SEMPLICE', {
      x: 50,
      y: 800,
      size: 20,
      font,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Nome: ${data.nome}`, { x: 50, y: 750, size: 14, font });
    page.drawText(`Cognome: ${data.cognome}`, { x: 50, y: 720, size: 14, font });

    const pdfBytes = await pdfDoc.save();
    const base64 = Buffer.from(pdfBytes).toString('base64');

    const path = `${RNFS.DownloadDirectoryPath}/Verbalia_Semplice_${Date.now()}.pdf`;

    await RNFS.writeFile(path, base64, 'base64');

    console.log('✅ PDF semplice salvato in:', path);
  } catch (error) {
    console.error('❌ Errore PDF semplice:', error);
  }
}

/**
 * PDF del form multi-step
 * Esempio con più sezioni e layout più strutturato
 */
export async function generateMultiPDF(data) {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]);

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    let yPosition = 800;

    // Titolo
    page.drawText('VERBALIA - FORM MULTI STEP', {
      x: 50,
      y: yPosition,
      size: 20,
      font,
      color: rgb(0, 0, 0),
    });

    yPosition -= 40;

    // Sezione 1
    page.drawText('SEZIONE DATI PERSONALI', {
      x: 50,
      y: yPosition,
      size: 16,
      font,
      color: rgb(0.2, 0.2, 0.2),
    });

    yPosition -= 30;

    page.drawText(`Nome: ${data.nome}`, {
      x: 70,
      y: yPosition,
      size: 14,
      font,
    });

    yPosition -= 25;

    page.drawText(`Cognome: ${data.cognome}`, {
      x: 70,
      y: yPosition,
      size: 14,
      font,
    });

    yPosition -= 40;

    // Sezione 2 (esempio campi aggiuntivi opzionali)
    if (data.email) {
      page.drawText(`Email: ${data.email}`, {
        x: 70,
        y: yPosition,
        size: 14,
        font,
      });
      yPosition -= 25;
    }

    if (data.telefono) {
      page.drawText(`Telefono: ${data.telefono}`, {
        x: 70,
        y: yPosition,
        size: 14,
        font,
      });
      yPosition -= 25;
    }

    yPosition -= 40;

    // Firma / chiusura
    page.drawText('Documento generato automaticamente da Verbalia.', {
      x: 50,
      y: yPosition,
      size: 10,
      font,
      color: rgb(0.4, 0.4, 0.4),
    });

    const pdfBytes = await pdfDoc.save();
    const base64 = Buffer.from(pdfBytes).toString('base64');

    const path = `${RNFS.DownloadDirectoryPath}/Verbalia_Multi_${Date.now()}.pdf`;

    await RNFS.writeFile(path, base64, 'base64');

    console.log('✅ PDF multi-step salvato in:', path);
  } catch (error) {
    console.error('❌ Errore PDF multi-step:', error);
  }
}