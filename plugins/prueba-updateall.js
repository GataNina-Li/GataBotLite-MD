import axios from 'axios'
let previousCommitSHA = ''
let previousUpdatedAt = ''
const owner = 'GataNina-Li'
const repo = 'GataBotLite-MD'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      const { sha, commit: { message }, html_url } = response.data[0]

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha
        previousUpdatedAt = message
    conn.sendMessage(m.chat, { text: `*UPDATE*\n*- REPO:* ${html_url}\n*- Mensaje de commit:* ${message}` }, { quoted: m })
   } 
  } catch (error) {
    m.reply('ERROR\n', error.message)
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(actualizar|actualizacion)/i
handler.owner = true
export default handler
