import React from 'react';

const SubBanner = ({children}) => {
    const styles = {
        backgroundImage: "url('/images/Vector.png'), url('/images/Vector-1.png')",
        backgroundPosition: "left 0px  bottom, right 0px top",
        backgroundRepeat: "no-repeat"
    }
    return (
        <div>
            <div style={styles} className="container h-96 flex justify-center items-center py-16 bg-purple-50">
                {children}
            </div>
        </div>
    );
};

export default SubBanner;