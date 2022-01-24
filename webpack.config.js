// Основной модуль манипулирования путями файлов.
const path = require('path');
// При ошибке проверить пути к файлам.
module.exports = {
    mode: 'production',
    entry: {
        //  Исходный файл трансляции кода es6,es7 и так далее.
        app: path.resolve(__dirname, 'src/app.js')
    },
    // Конечный файл трансляции кода в es5.
    output: {
        // Скомпилированный файл сохраняется в папку 'build'.
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    // Модуль загрузки файлов трансляции.
    module: {
        // Настройки трансляции.
        rules: [{
            // Необязательная проверка всех файлов на тип .js
            test: /\.js?$/,
            // Исключение из проверки папку node_modules.
            exclude: /node_modules/,
            // Указание имети загрузчика трансляции.
            loader: 'babel-loader',
            // Запрос на работу с пресетом транслятора кода.
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    },
    // Устранение ошибки can't get /
    devServer: { static: { directory: path.join(__dirname, './')}}
}
