import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
 

const Service = () => {
    const { classId } = useParams();
     const [user] = useAuthState(auth)

    const orderHandle = event => {
     event.preventDefault();

     const admitionBooked =  {
        StudentName: user.displayName,
        StudentEmail: user.email,
     };
     fetch('Services.json', {
          method: 'POST',
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(admitionBooked)
        })
    };
    
    return (
        <div className='container mx-auto bg-pink-100 py-20'>

            <div>
               
                <h1 className='text-3xl font-bold text-center py-3' >{classId}</h1>
            </div>
            <div className='px-10 '>
                {/* <img src={image} className="max-w-sm rounded-lg shadow-2xl h-48 w-44 mb-3" alt='img' /> */}
            </div>

            <div className='text-center'>
                <form onSubmit={orderHandle}>
                <input type="text" readOnly placeholder={classId} className="input input-bordered input-accent w-full max-w-xs " />
                <br></br> <br></br>
                <input type="text" placeholder="admit fee" className="input input-bordered input-accent w-full max-w-xs" />
                <br></br> <br></br>
                <input type="text" readOnly placeholder={user.displayName} className="input input-bordered input-accent w-full max-w-xs" />
                <br></br> <br></br>
                <input type="text" readOnly placeholder={user.email} className="input input-bordered input-accent w-full max-w-xs" />
                <br></br> <br></br>
                <input type="number" placeholder="phone" className="input input-bordered input-accent w-full max-w-xs" />
                <br></br> <br></br>
                <input type="text" placeholder="address" className="input input-bordered input-accent w-full max-w-xs" />
                <br></br> <br></br>
                <button  type="submit" className="btn btn-success w-full max-w-xs">Admit now</button>
                <br></br> <br></br>
                </form>
            </div>
             
        </div>
    );
};

export default Service;