package tk.snow.tunnel.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import tk.snow.tunnel.entity.Fixture;

import java.util.List;

@Mapper
@Repository

public interface FixtureMapper extends BaseMapper<Fixture> {



    //查询表字典
    @Delete("delete from fixture where id = '${id}'")
    Integer deleteById(@Param("id") Integer id);

    //查询表字典
    @Select("select * from fixture where routeId = '${routeId}'")
    List<Fixture> getByRoute(@Param("routeId") Integer routeId);



}
