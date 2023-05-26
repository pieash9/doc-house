/* eslint-disable react/prop-types */


const SectionTitle = ({title,subTitle}) => {
    return (
        <div className="text-center ">
            <h3 className="text-4xl mb-4 text-gray-700">{title}</h3>
            <p className="md:w-2/3 mx-auto text-gray-600">{subTitle}</p>
        </div>
        
    );
};

export default SectionTitle;