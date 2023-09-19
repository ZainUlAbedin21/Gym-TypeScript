import Logo from "@/assets/Logo.png"

const Footer = () => {

  return (
<footer className="bg-primary-100 py-16">
<div className="justify-content mx-auto w-5/6 gap-16 md:flex">

<div className="mt-16 basis-1/2 md:mt-0">
    <img alt="logo" src={Logo}/>
    <p className="my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus non incidunt illo eligendi, ad vero molestiae laboriosam quis eum commodi libero, animi omnis error optio voluptatibus magnam? Consequatur, tempore?
    </p>
    <p>ZAIN UL ABEDIN All Rights Reserved.</p>
</div>
<div className="mt-16 basis-1/4 md:mt-0">
    <h4 className="fint-bold">Links</h4>
    <p className="my-5">ZAIN</p>
    <p className="m-5">ZAIN UL ABEDIN</p>
    <p>ZAINULABEDIN2121</p>
</div>
<div className="mt-16 basis-1/4 md:mt-0">
    <h4 className="fint-bold">Links</h4>
    <p className="my-5">ZAIN</p>
    <p className="m-5">ZAIN UL ABEDIN</p>
</div>

</div>
</footer>
    );
};

export default Footer