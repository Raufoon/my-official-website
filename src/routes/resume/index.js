const CV_DE =
  "https://firebasestorage.googleapis.com/v0/b/minhaz-raufoon.appspot.com/o/business-card%2Fcv-de.pdf?alt=media&token=7fb95a20-4aa5-4ec7-a1eb-0524a106c2b2"

export default function Resume() {
  return (
    <div>
      <embed src={CV_DE} width="800px" height="2100px" />
    </div>
  )
}
