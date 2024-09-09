export const downloadBillByUrl = async (url, fileName) => {
    fetch('https://cors-anywhere.herokuapp.com/' + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/pdf',
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]),);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${fileName}.pdf`,);

            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });
}

// export const downloadBillByUrl = async (url, fileName) => {
//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/pdf',
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch the file');
//         }

//         const blob = await response.blob(); // Correctly handle binary data

//         // Create blob link to download
//         const downloadUrl = window.URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = downloadUrl;
//         link.setAttribute('download', `${fileName}.pdf`); // Set filename

//         // Append to HTML element
//         document.body.appendChild(link);

//         // Start download
//         link.click();

//         // Clean up and remove the link
//         link.parentNode.removeChild(link);
//     } catch (error) {
//         console.error('Error downloading the file:', error);
//     }
// };

