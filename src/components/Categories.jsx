const Categories = ({jobCategory}) => {
    const {name, logo, availableJobs} = jobCategory;


    return (
        <div className="my-container bg-gray-100 w-60 h-44 my-8 rounded-lg">
            <img className="mb-8" src={logo} alt="" />
            <p className="text-xl font-extrabold font-mono">{name}</p>
            <p><small>{availableJobs}</small></p>
        </div>
    );
};

export default Categories;