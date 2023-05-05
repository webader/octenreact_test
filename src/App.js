import {useForm} from "react-hook-form";

const App = () => {
    let {register,handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        //...catch obj
    }


    return (
        <div>


            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", {required:true})}/>  {/*// тут register створює автоматично інпут з наймом title*/}
                <input {...register("body")}/>
                <input type='submit' value={'save post'}/>
            </form>
        </div>
    );
};

export default App;
