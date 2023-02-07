const color = 'yellow';
if (color === 'green') {
    console.log('rasta par how');
}
else if (color === 'red') {
    console.log('wait koro');
}
else {
    console.log('sabdhane par how');
}


// switch (faster version of if-else)
switch(color) {
    case 'green':
        console.log('rasta par how');
        break;
    case 'red':
        console.log('wait koro');
        break;
    default:
        console.log('sabdhane par how');
}