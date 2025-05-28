function Footer() {
  return (
    <div className="w-screen border py-[40px] bg-[#4338CA] flex justify-center items-center mt-[54px]">
      <div className="flex gap-[120px]">
        <div className="h-[200px] w-[247px] flex flex-col gap-[12px]">
          <div className="w-[92px] h-[20px]">
            <img src="Logo-1.png" alt="film" />
          </div>
          <p className="text-[14px] text-[#FAFAFA] font-[400]">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>

        <div className="w-[913px] flex items-end text-[14px] text-[#FAFAFA] font-[400] gap-[12px] flex-col">
          <div className=" flex gap-[96px]">
            <div className="flex flex-col justify-start gap-[12px]">
              <p className="text-[14px] text-[#FAFAFA] font-[400]">
                Contact Information
              </p>
              <div className="flex flex-col">
                <div className="flex gap-[12px]">
                  <div className="flex items-center">
                    <img
                      src="email-icon.png"
                      alt=""
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                  <div>
                    <p className="font-[500]">Email:</p>
                    <p>support@movieZ.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-start">
                <div className="flex gap-[12px]">
                  <div className="flex items-center">
                    <img src="phone.png" alt="" className="w-[16px] h-[16px]" />
                  </div>
                  <div>
                    <p className="font-[500]">Phone:</p>
                    <p>+976 (11) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[12px]">
              <p>Follow us</p>
              <div className="flex gap-[12px] font-semibold">
                <p className="hover:cursor-pointer">Facebook</p>
                <p className="hover:cursor-pointer">Instagram</p>
                <p className="hover:cursor-pointer">Twitter</p>
                <p className="hover:cursor-pointer">Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
