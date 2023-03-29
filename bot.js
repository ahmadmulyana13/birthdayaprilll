const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")


let init = 0

const botSay = (data) => {
    return [
    "Hallo, Aprillia muharam berapakah usia muu 🔄",
    `OOOooohh ${data?.nama}, kamu ulang tahun sekarang yahhh ?`,
    `Wahhhh yaa ${data?.usia} atuhh, selamat ulang tahun yaaa prilll ❤❤❤  `,
    `sama-samaaaa , btw semoga terus tumbuh dengan menebar kebaikan yaa; jangan lupa sama hopeless even if u not fighting
    i hope u better on a rollercoaster live honestly okeyy ❤ ✨     seneng gaa tuuh ?`,
    ` yessss kalo ${data?.pacar} kalo gituu, i love uuuuuu 🌻 `,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if(jawaban.value.length < 1) return alert("silahkan isi jawaban dulu")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value})
    } else if (init === 2) {
        botDelay({ usia: jawaban.value})
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value})
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value})
    } else if (init === 5) {
        finishing()
    }
    else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1250])
    usersData.push(jawaban.value)
    jawaban.value = ""
}


function finishing() {
    pertanyaan.innerHTML = ` iyaa, di ${usersData[0]} years old iniii , Sending you all my love and warmest wishes on your birthday, my dear girlfriend. You are the best thing that's ever happened to me, and I can't wait to make more memories together. yaaa 🎉🎈❤ bstrd13`
    jawaban.value = "happy birthdayy hehe"
}

function botEnd() {
    alert(`selamat berumur ${usersData[0]} ; big love and hopes from plered-purwakarta.`)
   window.location.reload()
}