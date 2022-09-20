package tk.snow.tunnel.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import tk.snow.tunnel.entity.Discern;

@Mapper
@Repository

public interface DiscernMapper extends BaseMapper<Discern> {



    //查询表字典
    @Delete("delete from discern where id = '${id}'")
    Integer deleteById(@Param("id") Integer id);



}
