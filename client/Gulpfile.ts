import { src, dest, watch, series, parallel } from 'gulp'
import concat from 'gulp-concat'
import sourcemaps from 'gulp-sourcemaps'

import path from 'path'

import webpack from 'webpack-stream'
import { Configuration as WebpackConfig } from 'webpack'

const DIST = path.join(__dirname, 'dist/')
const SRC = path.join(__dirname, 'src/') 

const webpackConfig : WebpackConfig = { 
    mode: 'development',
    devtool: 'source-map',
    
    context: SRC,
    entry: ["./main.js"], 
    output: { 
        path: DIST,
        filename: "main.js",
    },
    
    resolve: { 
        extensions: ['.js', '.jsx'],
        modules: [ SRC , path.join(__dirname, "node_modules") ],
        alias: { 
            lib: path.join(__dirname, "lib"), 
        }
    },
    
    module: { 
        rules: [{
            exclude: /node_modules/,
            use: { 
                loader: 'babel-loader',
                options: { 
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        }]
    },
    
    optimization: {
        minimize: false
    },
}


export function buildJS() { 
    return src("src/main.js")
        .pipe(webpack(webpackConfig))
        .pipe(dest(DIST))
}