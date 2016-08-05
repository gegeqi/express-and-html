class InitAction{
    doAction(cmd, output, currentState) {
        switch (cmd) {
            case '1':
                currentState.value = 'postcode';
                output('please input postcode or input q to quit:');
                break;
            case '2':
                currentState.value = 'barcode';
                output('please input barcode or input q to quit:');
                break;
            case '3':
                output('goodbye');
                process.exit();
                break;
            default:
                currentState.value = 'init';
                output('Input error');
        }
    }
}
module.exports = InitAction;





