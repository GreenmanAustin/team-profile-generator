// This function inside the HTML; it generates the HTML for each employee type

const generateEmployeeCards = employeeArr => {
    return `
    ${employeeArr
            .filter(emp => emp.role === 'Manager')
            .map((employee) => {
                return `
    <div class="employee">
        <section class="card-top">
            <h3 class="card-txt-name">${employee.name}</h3>
            <h3 class="card-txt-role">${employee.role}</h3>
        </section>
        <div class="card-bottom">
            <p class="card-txt-1">ID: ${employee.id}</p>
            <p class="card-txt-1">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p class="card-txt-2">Office number: ${employee.officeNumber}</p>
        </div>
    </div>
        `;
            })
        }
    ${employeeArr
            .filter(emp => emp.role === 'Engineer')
            .map((employee) => {
                return `
    <div class="employee">
        <section class="card-top">
            <h3 class="card-txt-name">${employee.name}</h3>
            <h3 class="card-txt-role">${employee.role}</h3>
        </section>
        <div class="card-bottom">
            <p class="card-txt-1">ID: ${employee.id}</p>
            <p class="card-txt-1">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p class="card-txt-2">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></p>
        </div>
    </div>
        `;
            })
            .join('')
        }

        ${employeeArr
            .filter(emp => emp.role === 'Intern')
            .map((employee) => {
                return `
    <div class="employee">
        <section class="card-top">
            <h3 class="card-txt-name">${employee.name}</h3>
            <h3 class="card-txt-role">${employee.role}</h3>
        </section>
        <div class="card-bottom">
            <p class="card-txt-1">ID: ${employee.id}</p>
            <p class="card-txt-1">Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p class="card-txt-2">School: ${employee.school}</p>
        </div>
    </div>
        `;
            })
            .join('')
        }
    </div>`
}


// This is the function being exported; it received the array of employee objects and generates the HTML.
module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team-Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="text-white top-header">
        <h1 class="text-md-center title">My Team</h1>
    </header>
    <main class="main">
        ${generateEmployeeCards(templateData)}
    </main>
    </body>
  </html>
`
}