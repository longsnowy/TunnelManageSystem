package tk.snow.tunnel.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import tk.snow.tunnel.entity.Route;

@Mapper
@Repository

public interface RouteMapper extends BaseMapper<Route> {



    //查询表字典
    @Delete("delete from route where id = '${id}'")
    Integer deleteById(@Param("id") Integer id);



}
