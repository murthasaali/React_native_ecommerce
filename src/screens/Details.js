    import React from 'react';
    import { View, StyleSheet } from 'react-native';
    import { WebView } from 'react-native-webview';

    const SketchfabEmbed = () => {
    return (
        <View style={styles.container}>
        <WebView
            source={{ html: `
            <html>
                <body style="margin: 0;">
                <div class="sketchfab-embed-wrapper">
                    <iframe
                    title="Nikon D750 DSLR"
                    frameborder="0"
                    allowfullscreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                    style="width: 100%; height: 100%;"
                    src="https://sketchfab.com/models/8fb9d4632c234961908c0c7b3c7b168c/embed"
                    ></iframe>
                    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
                    <a href="https://sketchfab.com/3d-models/nikon-d750-dslr-8fb9d4632c234961908c0c7b3c7b168c?utm_medium=embed&utm_campaign=share-popup&utm_content=8fb9d4632c234961908c0c7b3c7b168c"
                        target="_blank"
                        rel="nofollow"
                        style="font-weight: bold; color: #1CAAD9;">
                        Nikon D750 DSLR
                    </a> by
                    <a href="https://sketchfab.com/nemanja_m?utm_medium=embed&utm_campaign=share-popup&utm_content=8fb9d4632c234961908c0c7b3c7b168c"
                        target="_blank"
                        rel="nofollow"
                        style="font-weight: bold; color: #1CAAD9;">
                        Nemanja Milosevic
                    </a> on
                    <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8fb9d4632c234961908c0c7b3c7b168c"
                        target="_blank"
                        rel="nofollow"
                        style="font-weight: bold; color: #1CAAD9;">
                        Sketchfab
                    </a>
                    </p>
                </div>
                </body>
            </html>
            ` }}
            onError={(error) => console.error('WebView Error:', error)}

        />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    });

    export default SketchfabEmbed;
