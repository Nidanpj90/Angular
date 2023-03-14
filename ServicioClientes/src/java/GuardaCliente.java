import java.io.*;
import java.sql.*;
import java.util.Iterator;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import javax.sql.DataSource;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONObject;


/**@WebServlet(
		name= "ConsultaUsuario",
		urlPatterns={"/consulta"})  Servlet 3.0 ***/
@WebServlet("/GuardaC")
public class GuardaCliente extends HttpServlet {

//HttpServletRequest request;
private String userName="servidores";
private String password="servidores";
private String url="jdbc:mysql://localhost:3306/clientes";
private String driver="com.mysql.jdbc.Driver";

 
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
        
        //1.-  Creamos un objeto para poder escribir la respuesta
            PrintWriter out = response.getWriter();
        try {
        //2.-  Establecemos el tipo MIME del mensaje de respuesta
            //response.setContentType("text/plain");
            response.setContentType("application/json");
          
            // Authorize (allow) all domains to consume the content
            response.addHeader("Access-Control-Allow-Origin","*");
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST");
            
           // response.setContentType("text/javascript");
                        
            Connection conn = null;
            Statement stmt = null;

            String jsonString = "";
            jsonString=request.getParameter("cliente"); 
            
            JSONObject cliente;
            
            if(jsonString==null)
                guardaClienteBD(null,request,out);
            else{
                cliente = new JSONObject(jsonString);
                guardaClienteBD(cliente,request,out);
            }
            
    //  request.getRequestDispatcher("TestServlet").include(request, response);
      
            out.flush();
                       
        
        } catch (Exception ex) {
            out.println(ex);
        }
   
}
    //---------------------------------------
    public void guardaClienteBD(JSONObject cliente,HttpServletRequest request, PrintWriter out){
   //  public void guardaClienteBD(PrintWriter out,HttpServletRequest request){
    
         Connection     conn = null;
         Statement      stmt = null;
         
         String         sqlStr=null;
         String     nombre,nif,direccion,grupo;
         int        id;

        try {
        //Paso 1: Cargar el driver JDBC.
           Class.forName(driver).newInstance();

        // Paso 2: Conectarse a la Base de Datos utilizando la clase Connection
           conn = DriverManager.getConnection(url, userName, password);
          // conn=pool.getConnection();
           
        // Paso 3: Crear sentencias SQL, utilizando objetos de tipo Statement
            stmt = conn.createStatement();
            
        // Paso 4: Crear la sentencias SQL, a partir de los parametros recibidos
         
        if (cliente!=null){   
             nombre    = (String)cliente.get("nombre"); 
             id        = Integer.parseInt(cliente.getString("id"));
             nif       = (String)cliente.get("nif");
             direccion = (String)cliente.get("direccion");
             grupo     = (String)cliente.get("grupo"); 
        }
        else{
             nombre    = (String)request.getParameter("nombre"); 
             id        = Integer.parseInt((String)request.getParameter("id"));
             nif       = (String)request.getParameter("nif");
             direccion = (String)request.getParameter("direccion");
             grupo     = (String)request.getParameter("grupo"); 
             
            }
           //grupo="2DAW";   
      
        sqlStr="INSERT INTO cliente(id,nombre,nif,direccion,grupo) VALUES (?,?,?,?,?)";
        
        PreparedStatement pstm= conn.prepareStatement(sqlStr);
        pstm.setInt(1, id);
        pstm.setString(2, nombre);
        pstm.setString(3, nif);
        pstm.setString(4, direccion);
        pstm.setString(5, grupo);
        
       
        
        int nreg = pstm.executeUpdate();
        

        //Integer ped =(Integer)pedido.get("codigo");
        // Paso 6: Response................
        String json="{\"cliente\":\"" +nombre+","+grupo+ "\",\"nif\":\""+nif+"\"}";
       // out.println( "pedido n�  "+ pedido.get("codigo")+" Guardado correctamente");
        out.println( json.toString());
        
               
        }catch (Exception exc){ 
            out.println("<html><head><title>Resultado de la consulta</title></head><body>");
            out.println("<p> se ha producido un error = " + exc+"</p>");
            out.println("<p> StrSql = " + sqlStr+"</p>");
            out.println("</body></html>");
        }finally{
            out.close();
            try{
                if(conn!=null) conn.close(); // Devuelve la conexion al pool
            } catch (SQLException ex) {
                Logger.getLogger(GuardaCliente.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        
    }
//----------------------------------------
public void doPost (HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
doGet(request, response);  // Redirecciona la petici�n POST al m�todo doGet()
}
//--------------------------------------------------
    public void init(ServletConfig config) throws ServletException{
        super.init(config);
        ServletContext contexto=config.getServletContext();
        
        url=contexto.getInitParameter("url");
               
        driver=contexto.getInitParameter("driver");
        
        userName=contexto.getInitParameter("userName");
        password=contexto.getInitParameter("password");
    }
}

      

