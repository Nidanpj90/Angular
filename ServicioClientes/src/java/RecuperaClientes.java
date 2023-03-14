/*import java.io.StringWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;*/

import java.io.*;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.*;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import javax.sql.DataSource;
import org.json.JSONException;
import org.json.JSONObject;


@WebServlet(
        urlPatterns = "/RecuperaC",
        initParams =
        {
            @WebInitParam(name = "userName", value = "clientes"),
            @WebInitParam(name = "password", value = "clientes")
        }
)

public class RecuperaClientes extends HttpServlet {


private String driver="com.mysql.jdbc.Driver";
private String userName="root";
private String password="root";
private String url="jdbc:mysql://localhost:3306/clientes";


DataSource pool;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
        
      response.addHeader("Access-Control-Allow-Origin","*");
      doPost(request,  response);
    
}
   
    //----------------------------------------

@Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

       
    response.setContentType("application/json");
    PrintWriter out=response.getWriter();

        Connection     conn = null;
        Statement      stmt = null;
        ResultSet       rs=null;
        String         sqlStr=null;
        int id;
        String  nombre,direccion,nif,grupo; 
        JSONObject salida =new JSONObject();

        try {
            Class.forName(driver).newInstance();

        // Paso 2: Conectarse a la Base de Datos utilizando la clase Connection
           conn = DriverManager.getConnection(url, userName, password);
          // conn=pool.getConnection();
           
        // Paso 3: Crear sentencias SQL, utilizando objetos de tipo Statement
            stmt = conn.createStatement();
          
            rs=stmt.executeQuery("select * from cliente");
           
           int i=0;
            while(rs.next()){
              id = rs.getInt("id");  
              nombre      = rs.getString("nombre");
              nif         = rs.getString("nif");
              direccion   = rs.getString("direccion");
              grupo       = rs.getString("grupo");
             
             Cliente cliente = new Cliente(id,nombre,nif,direccion,grupo);
             
             String jsonStr = new com.google.gson.Gson().toJson(cliente);  

             JSONObject arrayObj = new JSONObject(jsonStr);
            
             salida.put( Integer.toString(i), jsonStr);
             i++;
             }
            
            //salida.put( c.toString(), arrayObj);
            
           } catch (SQLException ex) {
            System.out.println("Error JSONException-> "+ex.getMessage());
             
           }catch (Exception exc){ 
            out.println("<html><head><title>Resultado de la consulta</title></head><body>");
            out.println("<p> se ha producido un error = " + exc+"</p>");
            out.println("<p> StrSql = " + sqlStr+"</p>");
            out.println("<p> Error  completo= " + exc+"</p>");
            out.println("</body></html>");
        }finally{
            try {
                rs.close();stmt.close();
            } catch (SQLException ex) {
                System.out.println("Error-> " + ex.getMessage());
            }
        }  
        out.print(salida.toString());
        out.close();
    }
 //---------------------------------------------------------------------------   
//--------------------------------------------------
    public void init(ServletConfig config) throws ServletException{
        super.init(config);
        ServletContext contexto=config.getServletContext();
        
        url=contexto.getInitParameter("url");
               
        driver=contexto.getInitParameter("driver");
        
        userName=contexto.getInitParameter("userName");
        password=contexto.getInitParameter("password");
    }
}// Servlet.....


