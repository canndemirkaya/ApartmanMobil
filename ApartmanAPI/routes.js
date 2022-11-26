const express = require('express');
const sql=require('mssql/msnodesqlv8');
const passportJWT = require('passport-jwt');
// const passport = require('passport');
// const http = require("https");
// const  jwt  =  require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const config = {
    user:'DESKTOP-K0ST1AU\\cannd',
    password:'',
    database:'ApartmanDB',
    server: '(localdb)\\MSSQLLocalDB',
    driver:'msnodesqlv8',
    options:{
        trustedConnection:true
    }

}
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'secret';


const findUserByUsername = async (username, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('PID', sql.NVarChar(11), username)
        .execute('FindUserByUsername', (err, result) => {
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const findUser = async (SerialNumber, cb) => {
    try {
        await sql.connect(config)       
        const request = new sql.Request()       
        request.query(request.template`SELECT [SerialNumber] FROM [ApartmanDB].[dbo].[tbl_Users] Where SerialNumber = ${SerialNumber} `, (err,result) => {
            cb(err,result)
        });   
    }
    catch (error) {
        console.log('There has been a problem with your findUserByusername() function111:' + error);   
    }
}
const registerUser = async (type, serial, name, surname, phoneNumber, password, userType, cb) => {
    try {
        await sql.connect(config)       
        const request = new sql.Request()       
        request.query(request.template`INSERT INTO [ApartmanDB].[dbo].[tbl_Users] (Type, SerialNumber, Name, Surname, PhoneNumber, Password, UserType) VALUES (${type}, ${serial}, ${name}, ${surname}, ${phoneNumber}, ${password}, ${userType})`, (err,result) => {
            cb(err,result)
        });   
    }
    catch (error) {
        console.log(error);   
    }
}
const InsertResident = async (residentSerial, residentName, residentSurname, residentPhone, reference, residentBlok, residentFloor, residentFlat, cb) => {
        try {
            await sql.connect(config)       
            new sql.Request()
            .input('ResidentSerial', sql.NVarChar(50), residentSerial)
            .input('ResidentName', sql.NVarChar(50), residentName)
            .input('ResidentSurname', sql.NVarChar(50), residentSurname)
            .input('ResidentPhone', sql.NVarChar(50), residentPhone)
            .input('ReferenceMaster', sql.Int, reference)
            .input('residentBlok', sql.NVarChar(50), residentBlok)
            .input('residentFloor', sql.Int, residentFloor)
            .input('residentFlat', sql.Int, residentFlat)
            .execute('ResidentAdd', (err, result) => {
            
            cb(err,result)

            })
        }
        catch (error) {
            console.log(error);   
        }
}
const InsertInspector = async (InspectorSerial, InspectorName, InspectorSurname, InspectorPhone, reference, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('InspectorSerial', sql.NVarChar(50), InspectorSerial)
        .input('InspectorName', sql.NVarChar(50), InspectorName)
        .input('InspectorSurname', sql.NVarChar(50), InspectorSurname)
        .input('InspectorPhone', sql.NVarChar(50), InspectorPhone)
        .input('ReferenceMaster', sql.Int, reference)
        .execute('InspectorAdd', (err, result) => {
        
        cb(err,result)

        })
    }
    catch (error) {
        console.log(error);   
    }
}
const InsertManager = async (ManagerSerial, ManagerName, ManagerSurname, ManagerPhone, reference, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('ManagerSerial', sql.NVarChar(50), ManagerSerial)
        .input('ManagerName', sql.NVarChar(50), ManagerName)
        .input('ManagerSurname', sql.NVarChar(50), ManagerSurname)
        .input('ManagerPhone', sql.NVarChar(50), ManagerPhone)
        .input('ReferenceMaster', sql.Int, reference)
        .execute('ManagerAdd', (err, result) => {
        
        cb(err,result)

        })
    }
    catch (error) {
        console.log(error);   
    }
}
const GetResidents = async (UID, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('UID', sql.Int, UID)
        .execute('GetResidents', (err, result) => {
        
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const GetInspectors = async (UID, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('UID', sql.Int, UID)
        .execute('GetInspectors', (err, result) => {
        
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const GetManagers = async (UID, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('UID', sql.Int, UID)
        .execute('GetManagers', (err, result) => {
        
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const GetSurvey = async (SurveyID, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('SurveyID', sql.Int, SurveyID)
        .execute('GetSurvey', (err, result) => {
        
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const GetAnnouncement = async (SurveyID, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('AnnouncementID', sql.Int, SurveyID)
        .execute('GetAnnouncement', (err, result) => {
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const UpdateResident = async (UID,ResidentSerialNumber,ResidentName,ResidentSurname,ResidentPhone,ResidentBlok,ResidentFloor,ResidentFlat, cb) => {
    console.log(UID,ResidentSerialNumber,ResidentName,ResidentSurname,ResidentPhone,ResidentBlok,ResidentFloor,ResidentFlat)
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('UID', sql.Int, UID)
        .input('ResidentSerialNumber', sql.NVarChar(11), ResidentSerialNumber)
        .input('ResidentName', sql.NVarChar(), ResidentName)
        .input('ResidentSurname', sql.NVarChar(), ResidentSurname)
        .input('ResidentPhone', sql.NVarChar(), ResidentPhone)
        .input('ResidentBlok', sql.NVarChar(), ResidentBlok)
        .input('ResidentFloor', sql.Int, ResidentFloor)
        .input('ResidentFlat', sql.Int, ResidentFlat)
        .execute('UpdateResident', (err, result) => {
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const GetResident = async (PID, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('PID', sql.Int, PID)
        .execute('GetResident', (err, result) => {
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const GetSurveys = async (ApartmanCode, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('ApartmanCode', sql.Int, ApartmanCode)
        .execute('GetSurveys', (err, result) => {
        
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const GetAnnouncements = async (ApartmanCode, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('ApartmanCode', sql.Int, ApartmanCode)
        .execute('GetAnnouncements', (err, result) => {
        
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const GetDueValue = async (ApartmanCode, UID, cb) => {
    console.log(ApartmanCode, UID)
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('ApartmanCode', sql.Int, ApartmanCode)
        .input('UID', sql.Int, UID)
        .execute('GetDueValue', (err, result) => {
        
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const InsertDueValuetoAll = async (ApartmanCode, DuesValue, UID, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('ApartmanCode', sql.Int, ApartmanCode)
        .input('DuesValue', sql.Float, DuesValue)
        .input('UID', sql.Int, UID)
        .execute('InsertDueValuetoAll', (err, result) => {
        
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const InsertDueValue = async (DuesValue, UID, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('DuesValue', sql.Float, DuesValue)
        .input('UID', sql.Int, UID)
        .execute('InsertDueValue', (err, result) => {
        console.log(err,result,DuesValue,UID)
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const InsertSurvey = async (ApartmanCode, UID, SurveyHeader, SurveyLink, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('ApartmanCode', sql.Int, ApartmanCode)
        .input('UID', sql.Int, UID)
        .input('SurveyHeader', sql.NVarChar(), SurveyHeader)
        .input('SurveyLink', sql.NVarChar(), SurveyLink)
        .execute('InsertSurvey', (err, result) => {
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
const InsertAnnouncement = async (ApartmanCode, UID, AnnouncementHeader, AnnouncementContent, cb) => {
    try {
        await sql.connect(config)       
        new sql.Request()
        .input('ApartmanCode', sql.Int, ApartmanCode)
        .input('UID', sql.Int, UID)
        .input('AnnouncementHeader', sql.NVarChar(), AnnouncementHeader)
        .input('AnnouncementContent', sql.NVarChar(), AnnouncementContent)
        .execute('InsertAnnouncement', (err, result) => {
        cb(err,result)
        })
    }
    catch (error) {
        console.log(error);   
    }
}
router.post('/login', (req, res) => {
    const  username  =  req.body.username;
    const SECRET_KEY = 'secret';
    findUserByUsername (username, async (err, user) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        if (user.recordset[0] == undefined) return  res.status(404).json({error:'User not found!'});
        const salt = await bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(user.recordset[0].Password, salt);
        const result = bcrypt.compareSync(req.body.password,  hash)
        // const result = user.recordset[0].Password === req.body.password ? true : undefined;
        if(!result) return  res.status(401).json('Password not valid!');  
        const  expiresIn  =  10  *  60;
        res.status(200).json({ "user":  user.recordset[0]});       
        console.log('Succesful validation of the user.')
    });
});

router.post('/register', (req, res) => {
    const type = req.body.type;
    const name = req.body.name;
    const surname = req.body.surname;
    const serial = req.body.serial;
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;
    const userType = req.body.userType;
    findUser(serial, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        if (data.recordset[0] == undefined) {
            registerUser(type, serial, name, surname, phoneNumber, password, userType, async (err, data) => {
                if (err) return  res.status(500).json({error:'Server error!'});
                else {  
                    return res.status(200).json();
                }
            })
        }
        else return  res.status(401).json({error:'Bu kimlik numarası ile çoktan kayıt oldunuz.'});
        
    })


})
router.post('/ResidentAdd', (req, res) => {
    const residentName = req.body.residentName;
    const residentSurname = req.body.residentSurname;
    const residentSerial = req.body.residentSerial;
    const residentPhone = req.body.residentPhone;
    const reference = req.body.reference;
    const residentBlok = req.body.residentBlok;
    const residentFloor = req.body.residentFloor;
    const residentFlat = req.body.residentFlat;

    findUser(residentSerial, async (err, data) => {
        console.log(err, data)
        if (err) return  res.status(500).json({error:'Server error!'});
        if (data.recordset[0] == undefined) {
            InsertResident(residentSerial, residentName, residentSurname, residentPhone, reference, residentBlok, residentFloor, residentFlat,  async (err, data) => {
                console.log(err, data)
                if (err) return  res.status(500).json({error:'Server error!'});
                else {  
                    return res.status(200).json();
                }
            })
        }
    })
})
router.post('/InspectorAdd', (req, res) => {
    const InspectorName = req.body.InspectorName;
    const InspectorSurname = req.body.InspectorSurname;
    const InspectorSerial = req.body.InspectorSerial;
    const InspectorPhone = req.body.InspectorPhone;
    const reference = req.body.reference;
    findUser(InspectorSerial, async (err, data) => {
        console.log(err, data)
        if (err) return  res.status(500).json({error:'Server error!'});
        if (data.recordset[0] == undefined) {
            InsertInspector(InspectorSerial, InspectorName, InspectorSurname, InspectorPhone, reference, async (err, data) => {
                console.log(err, data)
                if (err) return  res.status(500).json({error:'Server error!'});
                else {  
                    return res.status(200).json();
                }
            })
        }
    })
})
router.post('/ManagerAdd', (req, res) => {
    const ManagerName = req.body.ManagerName;
    const ManagerSurname = req.body.ManagerSurname;
    const ManagerSerial = req.body.ManagerSerial;
    const ManagerPhone = req.body.ManagerPhone;
    const reference = req.body.reference;
    findUser(ManagerSerial, async (err, data) => {
        console.log(err, data)
        if (err) return  res.status(500).json({error:'Server error!'});
        if (data.recordset[0] == undefined) {
            InsertManager(ManagerSerial, ManagerName, ManagerSurname, ManagerPhone, reference, async (err, data) => {
                if (err) return  res.status(500).json({error:'Server error!'});
                else {  
                    return res.status(200).json();
                }
            })
        }
    })
})
router.post('/GetUser', (req, res) => {
    const username = req.body.SerialNumber;
    findUserByUsername(username, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({user:data.recordset})
        }
        // res.status(200).json({residents:data})
    })


})
router.post('/GetResidents', (req, res) => {
    const UID = req.body.UID;
    GetResidents(UID, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({residents:data.recordset})
        }
        // res.status(200).json({residents:data})
    })


})
router.post('/GetInspectors', (req, res) => {
    const UID = req.body.UID;
    GetInspectors(UID, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({inspectors:data.recordset})
        }
    })


})
router.post('/GetManagers', (req, res) => {
    const UID = req.body.UID;
    GetManagers(UID, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({managers:data.recordset})
        }
    })


})
router.post('/GetResident', (req, res) => {
    const PID = req.body.PID;
    GetResident(PID, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({resident:data.recordset})
        }
    })
})
router.post('/GetSurveys', (req, res) => {
    const ApartmanCode = req.body.ApartmanCode;
    GetSurveys(ApartmanCode, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({Surveys:data.recordset})
        }
    })


})
router.post('/GetAnnouncements', (req, res) => {
    const ApartmanCode = req.body.ApartmanCode;
    GetAnnouncements(ApartmanCode, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({Announcements:data.recordset})
        }
    })


})
router.post('/InsertDueValuetoAll', (req, res) => {
    const ApartmanCode = req.body.ApartmanCode;
    const DuesValue = req.body.DuesValue;
    const UID = req.body.UID;

    InsertDueValuetoAll(ApartmanCode, DuesValue, UID, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({result:'Success'})
        }
    })


})
router.post('/InsertDueValue', (req, res) => {
    const DuesValue = req.body.DuesValue;
    const UID = req.body.UID;
    InsertDueValue(DuesValue, UID, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({result:'Success'})
        }
    })


})
router.post('/GetDueValue', (req, res) => {
    const ApartmanCode = req.body.ApartmanCode;
    const UID = req.body.UID;

    GetDueValue(ApartmanCode, UID, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(201).json({DueValue:data.recordset})
        }
    })


})
router.post('/InsertSurvey', (req, res) => {
    const ApartmanCode = req.body.ApartmanCode;
    const UID = req.body.UID;
    const SurveyHeader = req.body.SurveyHeader;
    const SurveyLink = req.body.SurveyLink;
    InsertSurvey(ApartmanCode, UID, SurveyHeader, SurveyLink, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({result:'Works done!'})
        }
    })
})
router.post('/InsertAnnouncement', (req, res) => {
    const ApartmanCode = req.body.ApartmanCode;
    const UID = req.body.UID;
    const AnnouncementHeader = req.body.AnnouncementHeader;
    const AnnouncementContent = req.body.AnnouncementContent;
    InsertAnnouncement(ApartmanCode, UID, AnnouncementHeader, AnnouncementContent, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({result:'Works done!'})
        }
    })
})
router.post('/GetSurvey', (req, res) => {
    const SurveyID = req.body.SurveyID;

    GetSurvey(SurveyID, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({Survey:data.recordset})
        }
    })
})
router.post('/GetAnnouncement', (req, res) => {
    const AnnouncementID = req.body.AnnouncementID;

    GetAnnouncement(AnnouncementID, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({Announcement:data.recordset})
        }
    })
})
router.post('/UpdateResident', (req, res) => {
    const UID = req.body.UID;
    const ResidentSerialNumber = req.body.ResidentSerialNumber;
    const ResidentName = req.body.ResidentName;
    const ResidentSurname = req.body.ResidentSurname;
    const ResidentPhone = req.body.ResidentPhone;
    const ResidentBlok = req.body.ResidentBlok;
    const ResidentFloor = req.body.ResidentFloor;
    const ResidentFlat = req.body.ResidentFlat;
    UpdateResident(UID,ResidentSerialNumber,ResidentName,ResidentSurname,ResidentPhone,ResidentBlok,ResidentFloor,ResidentFlat, async (err, data) => {
        if (err) return  res.status(500).json({error:'Server error!'});
        else{
            res.status(200).json({Result:'success'})
        }
    })
})
module.exports = router;