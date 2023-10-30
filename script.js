
const database = supabase.createClient('https://pzbkwoqnxpvkewisxwmn.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6Ymt3b3FueHB2a2V3aXN4d21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2MDQ5MjUsImV4cCI6MjAxNDE4MDkyNX0.QXlTIdvofIf7IkLpqmr-J8qrNN0MSe4Ql2nHiCMEeQE')


const button = document.querySelector(".button-email")
let input = document.querySelector(".input-email")




async function receiveEmail(){
     const { error } = await database.from('emails').insert({ title: input.value})
      console.log({ error })
      const { data } = await database
     .from('emails')
     .select('title')
     console.log({data})
}




button.addEventListener('click',receiveEmail)

