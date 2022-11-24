import React from 'react'
import "../uicss/chat.css"
import { Avatar, IconButton } from '@material-ui/core'
import { useEffect, useState } from "react"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MmsRoundedIcon from '@mui/icons-material/MmsRounded';
import MicNoneIcon from '@mui/icons-material/MicNone';
import Modal from './Modal';
function chat() {
  // const sendMessage = (e) => {
  //   e.preventDefault();
  // }
  const [images, setImage] = useState(null)
  const [previewImage, setpreviewImage] = useState(null)
  const [number_commits, setnumber_commits] = useState(0)
  const [required, setrequired] = useState(0)
  // const [options, setoptions] = useState(0)
  useEffect(() => {
    const fetch_data = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      });
      const data = await response.json()
      if (data.hasOwnProperty("detail")) {
        localStorage.removeItem("token")
        window.open("/login", "_self")
      }
    }
    fetch_data()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    console.log(images);
    formData.append('group_name', 'Group-1');
    formData.append("image", images, images.name);
    console.log(formData);
    window.alert("Photo being uploaded...")
    // setoptions(0)
    localStorage.setItem("options", 0)
    const response = await fetch('http://127.0.0.1:8000/api/uploadimage', {
      method: 'POST',
      headers: {
        'Authorization': localStorage.getItem('token'),
      },
      body: formData
    });
    if (response) {
      window.alert('Photo Upload Successfully!')
    }
  }

  const onFileChange = event => {
    setImage(event.target.files[0])
    setpreviewImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0])
  };

  const generate_shares = async (e) => {
    e.preventDefault();
    let members_required = window.prompt("Enter the number of members required to unlock for the group");
    let secret = window.prompt("Enter the Secret Message");
    console.log(members_required, secret)

    const push_data = async (m, s) => {
      m = parseInt(m);
      s = parseInt(s);
      if (m > 0 && s > 0) {
        const response = await fetch('http://127.0.0.1:8000/api/generateshares', {
          method: 'POST',
          headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "group_name": localStorage.getItem('groupname'),
            "members_required": m,
            "secret": s
          })
        })
        const data = await response.json();
        console.log(data);
        if (data) {
          // setoptions(1
          localStorage.setItem("options", 1)

          window.alert("Shares Generated Successfully!")
        }
      }
      else {
        window.alert("Please enter valid values")
      }
    }
    push_data(members_required, secret);
    // setoptions(0)

  }
  useEffect(() => {
    const fetch_data = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/getlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
          "group_name": localStorage.getItem('groupname')
        })
      })
      const data = await response.json()
      console.log(data)
      setnumber_commits(parseInt(data.combined_shares))
      setrequired(parseInt(data.members_required))
      if (data.combined_shares >= data.members_required) {
        // setoptions(2)
    localStorage.setItem("options", 2)

      }
      else{
        localStorage.setItem("options", 1)
      }

    }
    fetch_data()

  }, [])
  const commit_share = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/commitshare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        "group_name": localStorage.getItem('groupname')
      })
    })
    const data = await response.json()
    console.log(data)
    if (data) {
      window.alert("Share Committed Successfully!")
    }
    else {
      window.alert("Share Commit Failed!")
    }
  }
  const view_image = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/getimage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        "group_name": localStorage.getItem('groupname')
      })
    })
    const data = await response.json()
    if (data) {
      window.open(('http://127.0.0.1:8000' + data.image), '_blank');
    }
    // console.log(data.image)
    // setdecrypted_image(data.image)
    // window.open(data.image)

  }
  return (


    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className="chat__headerifno">
          <h2>{localStorage.getItem('groupname')}</h2>

        </div>
        <div className='chat__headerright'>
          <IconButton>

            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat__body' style={{ paddingLeft: '10px' }}>
        {/* <p className=' chat__message'>Heyy</p> */}

        <div onClick={generate_shares} className='' style={{ marginTop: '10px', cursor: 'pointer', background: '#3E2ABE', width: '140px', padding: '5px', color: 'white', textAlign: 'center' }}>
          Generate Shares
        </div>

        {localStorage.getItem('options') === '1' ? <div onClick={commit_share} className='' style={{ marginTop: '10px', cursor: 'pointer', background: '#3E2ABE', width: '140px', padding: '5px', color: 'white', textAlign: 'center' }}>
          Commit Shares
        </div> : localStorage.getItem('options') === '2' ? <div onClick={view_image} className='' style={{ marginTop: '10px', cursor: 'pointer', background: '#3E2ABE', width: '140px', padding: '5px', color: 'white', textAlign: 'center' }}>View Image</div> : null}
      </div>
      <div className='chat__footer'>
        <label className="bg-[#3E2ABE] text-white cursor-pointer font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          <input type="file" accept="image/png, image/jpeg" onChange={onFileChange} />
          <span>Choose a file</span>
        </label>
        <IconButton>
          <MmsRoundedIcon />
        </IconButton>
        <form>
          {/* <input type="text" placeholder='Type a message' /> */}
        </form>
        <button onClick={handleSubmit} style={{ color: 'black' }} >Upload Image</button>
        <IconButton>
          <MicNoneIcon />
        </IconButton>
      </div>
    </div>

  )
}

export default chat
