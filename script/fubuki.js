const img1 = "../src/fubuki_1.jpg"
const img2 = "../src/fubuki_2.JPG"
let bool = true;
const api_url  = "http://localhost:3000"
const data = {
    "name": "nine",
    "age": 20,
    "pdata": () => { return data.name + ' ' + data.age }
}
data.grade = "A"
//console.log(data)
const json_string = JSON.stringify(data)
//console.log(json_string)
const his = new Object()
his.weight = 12.3
his.bias = 0.23
//console.log(his)
function show_date() {
    document.getElementById("34").innerHTML = Date()
    change_img1()
}
function change_img1() {
    document.getElementById("12").src = img1;
}
function change_img2() {
    document.getElementById("12").src = img2;
}
function loop() {
    if (bool) {
        change_img1()
        document.getElementById("3").style.backgroundColor = "rgba(0, 173, 254, 1)"
    } else {
        change_img2()
        document.getElementById("3").style.backgroundColor = "cadetblue"
    }

    bool = !bool
}
get_name = async (url) => {
    try {
        const res = await fetch(url, {
            method: "POST", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({ auth: "1234" }),
        })

        if (res.ok && res.status == 200) {
            const data = await res.json()
            //console.log(data)
            if (data.isAuth == 1) {
                document.getElementById("usr").innerText = data.firstname + " " + data.lastname
                //console.log(data)
                return
            } else {
                document.getElementById("usr").innerText = "fault auth"
            }

            return

        } else {
            console.log({ error: "can't fetch API" })
        }
    } catch (error) {
        console.log(error)
    }
};

function show() {
    const x = document.getElementById("da");
    if (x.style.display === "none") {
        x.style.display = "flex"
    } else {
        x.style.display = "none"
    }
}

document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
    //get file
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0]; // Get the selected file
    //check file isEmpty
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }
    //create playload as FromData
    const formData = new FormData();
    //append image
    formData.append('image', file);
    //append title
    formData.append('title', "img")
    console.log(file)
    //send via method POST in body
    try {
        const response = await fetch('http://localhost:3000/image', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            console.log('File upload successful:', result);
            if (result.ok) {
                console.log("server recieve image")
            }
        } else {
            console.error('File upload failed:', response.statusText);

        }
    } catch (error) {
        console.error('Error during file upload:', error);
        alert('An error occurred during file upload.');
    }
});
// let x = 1
// function fn1() {
//     return new Promise((resolve, reject) => {
//         if (x == 1) {
//             console.log("fn1")
//             resolve("success1")
//             x++
//         } else {
//             reject("faild 1")
//         }

//     })
// }
// function fn2() {
//     return new Promise((resolve, reject) => {
//         if (x == 2) {
//             console.log("fn2")
//             resolve("success2")
//             x++
//         } else {
//             reject("faild 2")
//         }
//     })
// }
// function fn3() {
//     return new Promise((resolve, reject) => {
//         if (x == 3) {
//             console.log("fn3")
//             resolve("success3")
//             x++
//         } else {
//             reject("faild 3")
//         }
//     })
// }
//fn1().then(fn2).then(fn3).then(() => console.log("end task"))
