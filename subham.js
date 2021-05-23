document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('butt');
    btn.addEventListener('click', startTheGame);
    const rootbody = document.querySelector('.rootbody');
    const start = document.querySelector('.start');

    function startTheGame() {
        if (rootbody.innerHTML === '') {
            const header = document.createTextNode('Game Started!');
            start.appendChild(header);
            const p = {
                PP1: 15,
                PP2: 30,
                PP3: 45,
                PP4: 60,
                PP5: 75,
            };

            const pps = document.createTextNode(
                `Petrol Pumps generated at ${p.PP1}, ${p.PP2}, ${p.PP3}, ${p.PP4}, ${p.PP5} `
            );
            rootbody.appendChild(pps);

            let posi = 0;
            let rem = 30;
            while (posi < 100) {
                // Generate a random number
                const random = Math.floor(Math.random() * 6 + 1);
                // For every random number you generate, add it to posi to get the position
                // till that point
                posi = posi + random;
                rem = parseInt(rem - random);
                switch (posi) {
                    case 15:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 16:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 17:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 18:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 19:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 20:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    default:
                        break;
                }
                switch (posi) {
                    case 30:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 31:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 32:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 33:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 34:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 35:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    default:
                        break;
                }
                switch (posi.value) {
                    case 45:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 46:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 47:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 48:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 49:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 50:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    default:
                        break;
                }

                switch (posi) {
                    case 60:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 61:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 62:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 63:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 64:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 65:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 66:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    default:
                        break;
                }
                switch (posi) {
                    case 75:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 76:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 77:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 78:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 79:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    case 80:
                        rem += 20;
                        console.log(`petrol rem ${rem}`);
                        break;
                    default:
                        break;
                }
                // check whether you have reached the destination or not
                // if reached break out of the loop and display destination
                // reached!!!!

                if (posi >= 100) {
                    document.body.querySelector(
                        '.rootbody'
                    ).innerHTML += ` - ${random}Kms travelled, Destination reached`;
                    break;
                }

                // append the posi and the step

                document.body.querySelector(
                    '.rootbody'
                ).innerHTML += `<br />Step - ${random}Kms travelled, position ${posi},
                petrol remaining ${rem}L
                <br/>`;
            }
        }
    }
});