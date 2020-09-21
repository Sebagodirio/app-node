const { rejects } = require('assert');
/* const { rejects } = require('assert'); */
const fs = require('fs');
const colors = require('colors')

const listar = (base, limite = 10) => {

    console.log('=================='.green)
    console.log(`==tabla de ${base}==`.green)
    console.log('=================='.green)
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`)
    }
}



const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`)
            return
        }
        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, err => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-limite-${limite}.txt`.blue)

        })
    })
}

module.exports = {
    crearArchivo,
    listar
}