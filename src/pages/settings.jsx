var FA = require('react-fontawesome')
import Header from "../components/header";
export default function Settings() {
      return (
            <div>
                  <Header/>
                  <div className="content p-5 flex">
                        <div className="img relative  max-w-[300px] max-h-[300px]">
                              <div className="img_container rounded-full overflow-hidden w-full h-full">
                                    <img src="https://picsum.photos/300/300" alt="user" className="w-[300px] h-[300px]" />
                              </div>
                              <div className="edit_btn text-white absolute top-[25px] right-[25px] p-2 px-3 rounded-full bg-orange-400 cursor-pointer hover:bg-orange-600">
                                    <i class="fa-solid fa-pen"></i>
                              </div>
                        </div>
                        <div className="data lg:ml-14 w-full max-w-[600px]">
                              <form action="">
                                    <div className="control-form flex flex-col">
                                          <label htmlFor="username" className="my-3">Username</label>
                                          <input type="text" name="username" id="username" className="border text-lg p-1 rounded"/>
                                    </div>
                                          <div className="control-form flex flex-col">
                                          <label htmlFor="username" className="my-3">password</label>
                                          <input type="password" name="username" id="username" className="border text-lg p-1 rounded"/>
                                    </div>
                                    <div className="row flex justify-end my-6">
                                          <button type="submit" className="bg-green-600 text-white p-2.5 rounded-lg hover:bg-green-700 hover:shadow-lg">Save Changes</button>
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
}