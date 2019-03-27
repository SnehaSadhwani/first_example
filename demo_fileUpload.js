var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer((req,res)=>{
    if(req.url == '/fileupload'){
        var form =new formidable.IncomingForm();
        form.parse(req,(err, fields, files)=>{
            console.log(files.fileupload.path);
            var oldpath = files.fileupload.path;
            var newpath ='D:/Office/Node/first_example'+ files.fileupload.name;
            fs.renameSync(oldpath, newpath,(err)=>{
                if(err){
                    console.log(err)
                    res.write('File Uploaded and moved');
                    // res.end();
                }
                else{
                    console.log('success')
                    res.write('File Uploaded and moved');
                    
                }
                res.end();
            })
            
        });
    }
    else{
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }    
}).listen(8080);