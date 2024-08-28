import React from 'react';
import { fetchData } from './FeatureData';
import SingleFeature from '../SingleFeature/SingleFeature';
import './Feature.css';

const feature = fetchData();

const Feature = () => {
    return (
        <section className="feature py-4">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-6">
                        <h2>Why you choose us</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas
                            consequatur autem culpa accusamus delectus asperiores maxime eum
                            aspernatur. Enim?
                        </p>
                    </div>
                </div>
                <div className="row text-center">
                    {feature.map((feature) => (
                        <SingleFeature key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;
