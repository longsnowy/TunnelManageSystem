package tk.snow.tunnel.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {
    @TableId(type = IdType.AUTO)
    private int id;
    @TableField(value = "time")
    private String time;
    @TableField(value = "userId")
    private int userId;
    @TableField(value = "repairNum")
    private int repairNum;
    @TableField(value = "checkNum")
    private int checkNum;
    @TableField(value = "info")
    private String info;
}

