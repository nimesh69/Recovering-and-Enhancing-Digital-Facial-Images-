import React from 'react';
import { ModelCard } from '../components/model/ModelCard';
import { Header } from '../components/Header/Header';
import resultImage from '../components/images/asian+ffhq+celebx_(256)/all256 (2).png';
import graphImage1 from '../components/images/asian+ffhq+celebx_(256)/output.png';
import graphImage2 from '../components/images/asian+ffhq+celebx_(256)/output2.png';
import graphImage3 from '../components/images/asian+ffhq+celebx_(256)/output3.png';
import graphImage4 from '../components/images/asian+ffhq+celebx_(256)/output4.png';

import resultImage1 from '../components/images/asian+ffhq+celebx_(512)/all (2).png';
import graphImage5 from '../components/images/asian+ffhq+celebx_(512)/output.png';
import graphImage6 from '../components/images/asian+ffhq+celebx_(512)/output2.png';
import graphImage7 from '../components/images/asian+ffhq+celebx_(512)/output4.png';
import graphImage8 from '../components/images/asian+ffhq+celebx_(512)/output5.png';

import resultImage2 from '../components/images/asian + celebx/ac (2).png';
import graphImage9 from '../components/images/asian + celebx/output.png';
import graphImage10 from '../components/images/asian + celebx/output4.png';
import graphImage11 from '../components/images/asian + celebx/output2.png';
import graphImage12 from '../components/images/asian + celebx/output3.png';

import resultImage3 from '../components/images/only asian/a (2).png';
import graphImage13 from '../components/images/only asian/output.png';
import graphImage14 from '../components/images/only asian/output2.png';

import resultImage4 from '../components/images/esrgan/image.jpg';
import graphImage15 from '../components/images/esrgan/image (1).png';
import graphImage16 from '../components/images/esrgan/image (2).png';
import graphImage17 from '../components/images/esrgan/image (3).png';
import graphImage18 from '../components/images/esrgan/image (4).png';

import resultImage5 from '../components/images/asian+ffhq+celebx+custom(512)/453892935_2399830226884613_5983478680683818176_n_11.png';
import graphImage19 from '../components/images/asian+ffhq+celebx+custom(512)/output.png';
import graphImage20 from '../components/images/asian+ffhq+celebx+custom(512)/output1.png';
import graphImage21 from '../components/images/asian+ffhq+celebx+custom(512)/output2.png';
import graphImage22 from '../components/images/asian+ffhq+celebx+custom(512)/output3.png';
const models = [
    {
        name: "Dataset1(FFHQ+celeb A+Asian Faces+Custom)",
        description: "A comprehensive dataset consisting of 70,000 high-quality images from the FFHQ dataset, 30,000 high-quality celebrity images, 10,000 high-quality Asian face images and 10,000 custom dataset. All images are uniformly resized to a resolution of 512x512 pixels and processed using the GFPGAN architecture for enhanced image quality and restoration.",
        metrics: {
            psnr: "24.2617",
            Time_Taken: "8days 06hr55min03sec",
            Iteration: "1200000"
        },
        resultImage: resultImage5,
        graphImages: [graphImage19, graphImage20, graphImage21, graphImage22],
    },
    {
        name: "Dataset2(FFHQ+celeb A+Asian Faces)",
        description: "A comprehensive dataset consisting of 70,000 high-quality images from the FFHQ dataset, 30,000 high-quality celebrity images, and 10,000 high-quality Asian face images. All images are uniformly resized to a resolution of 256x256 pixels and processed using the GFPGAN architecture for enhanced image quality and restoration.",
        metrics: {
            psnr: "24.2897",
            Time_Taken: "6days 18hr28min22sec",
            Iteration: "1200000"
        },
        resultImage: resultImage,
        graphImages: [graphImage1, graphImage2, graphImage3, graphImage4],
    },
    {
        name: "Dataset3(FFHQ+celeb A+Asian Faces)",
        description: "A comprehensive dataset consisting of 70,000 high-quality images from the FFHQ dataset, 30,000 high-quality celebrity images, and 10,000 high-quality Asian face images. All images are uniformly resized to a resolution of 512x512 pixels and processed using the GFPGAN architecture for enhanced image quality and restoration.",
        metrics: {
            psnr: "23.7699",
            Time_Taken: "8days 12hr44min39sec",
            Iteration: "1000000"
        },
        resultImage: resultImage1,
        graphImages: [graphImage5, graphImage6, graphImage7, graphImage8],
    },
    {
        name: "Dataset4(Asian Faces+celebx)",
        description: "A comprehensive dataset consisting of 30,000 high-quality celebrity images, and 10,000 high-quality Asian face images. All images are uniformly resized to a resolution of 512x512 pixels and processed using the GFPGAN architecture for enhanced image quality and restoration.",
        metrics: {
            psnr: "21.5111",
            Time_Taken: "3days 11hr26min46sec",
            Iteration: "400000"
        },
        resultImage: resultImage2,
        graphImages: [graphImage9, graphImage10, graphImage11, graphImage12],
    },
    {
        name: "Dataset5(Asian Faces)",
        description: "A comprehensive dataset consisting of 10,000 high-quality Asian face images. All images are uniformly resized to a resolution of 512x512 pixels and processed using the GFPGAN architecture for enhanced image quality and restoration.",
        metrics: {
            psnr: "20.5642",
            Time_Taken: "2days 7hr55min003sec",
            Iteration: "240000"
        },
        resultImage: resultImage3,
        graphImages: [graphImage13, graphImage14],
    },
    {
        name: "ESRGAN",
        description: "A diverse dataset containing 70,000 high-quality images from the FFHQ dataset, 30,000 high-quality celebrity images, and 10,000 high-quality Asian face images. All images are resized to a resolution of 128x128 pixels and processed using the ESRGAN architecture to enhance visual quality and details.",
        metrics: {
            psnr: "23.92420959",
            Time_Taken: "1days 08hr32min2sec",
            Iteration: "200000"
        },
        resultImage: resultImage4,
        graphImages: [graphImage15, graphImage16, graphImage17, graphImage18],
    },
];

function OurWork() {
    return (
        <div className="min-h-screen bg-gray-50" style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            backgroundImage: 'radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)',
            backgroundSize: '30px 30px',
            backgroundPosition: '-5px -5px',
        }}>
            {/* Header */}
            <Header />
            {/* Main Content */}
            <main>
                <div className="py-8">
                    {models.map((model, index) => (
                        <React.Fragment key={model.name}>
                            <ModelCard
                                {...model}
                                reverse={index % 2 === 1}
                            />
                            {index < models.length - 1 && (
                                <div className="max-w-7xl mx-auto px-4">
                                    <hr className="border-gray-200" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default OurWork;