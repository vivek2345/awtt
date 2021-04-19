var firebaseConfig = {
    apiKey: "AIzaSyDjQftWDvaox4pk_p-iVr_5MhbYWm4f0fg",
    authDomain: "awtlab-83852.firebaseapp.com",
    projectId: "awtlab-83852",
    storageBucket: "awtlab-83852.appspot.com",
    messagingSenderId: "493288672196",
    appId: "1:493288672196:web:cc0340fd0f45b579feb291",
    measurementId: "G-2RP4ZKE76F"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var dbref=firebase.database().ref().child("students")
  function insertData()
  {
      var sname=document.getElementById("sname").value
        var rollno=document.getElementById("rollno").value
        dbref.child(rollno).set({
            sname:sname,
            rollno:rollno
        })
  
    }

    function deleteData()
    {
        var id=window.prompt("Enter the rollno to be deleted");
        dbref.child(id).remove()
        console.log("Data deleted");
    }

    function updateData()
    {
        var id=document.getElementById("rollno").value
        var nName=document.getElementById("sname").value
        dbref.child(id).update({sname:nName})
        
    }

    function loadData()
    {
        console.log("Reading Data...")
        dbref.on("value",(snap)=>{
            snap.forEach((data)=>{
                console.log(data.val())
            })
        })
    }
