import './Creatordiv.css';

function Creator() {

    return (
        <div className='crdiv'>
            <h2>Create your playlist</h2>
            <input type="file" multiple />
            <button>Save</button>
        </div>
    );
}

export default Creator;
