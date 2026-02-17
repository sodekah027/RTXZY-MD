global.owner = ['6283851354422'] // wajib di isi tidak boleh kosong
global.mods  = ['62895331520602'] // wajib di isi tidak boleh kosong
global.prems = ['62895331520602'] // wajib di isi tidak boleh kosong
global.nameowner = 'Tio' // wajib di isi tidak boleh kosong
global.numberowner = '62895331520602' // wajib di isi tidak boleh kosong
global.mail = 'support@tioprm.eu.org' // wajib di isi tidak boleh kosong
global.gc = 'https://chat.whatsapp.com/I5RpePh2b5u37OyFjzCNTr' // wajib di isi tidak boleh kosong
global.instagram = 'https://instagram.com/prm2.0' // wajib di isi tidak boleh kosong
global.wm = '© BOTCAHX'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '5'

global.autobio = false
global.antiporn = false
global.spam = false
global.gcspam = false
    

// APIKEY INI WAJIB DI ISI! //
global.btc = 'NcLdJpBp'

// AKSESKEY INI DI ISI JIKA DIPERLUKAN
global.aksesKey = 'YOUR_AKSESKEY_HERE'


// Tidak boleh diganti atau di ubah
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

// Tidak boleh diganti atau di ubah
global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
