export default class PDFJs {
  init = (source, element) => {
    const iframe = document.createElement('iframe');

    iframe.src = `/PDFjs/web/viewer.html?file=${source}`;
    iframe.width = '50%';
    iframe.height = '100%';

    element.appendChild(iframe);
  }
}