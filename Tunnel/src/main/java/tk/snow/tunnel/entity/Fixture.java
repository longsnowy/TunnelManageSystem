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
public class Fixture {
    @TableId(type = IdType.AUTO)
    private int id;
    @TableField(value = "name")
    private String name;
    @TableField(value = "img")
    private String img;
    @TableField(value = "routeId")
    private int routeId;
    @TableField(value = "distance")
    private double distance;
    @TableField(value = "timeId")
    private int timeId;
    @TableField(value = "isRepaired")
    private boolean isRepaired;
    @TableField(value = "repairTime")
    private String repairTime;
    @TableField(value = "isChecked")
    private boolean isChecked;
    @TableField(value = "checkTime")
    private String checkTime;
    @TableField(value = "repairUserId")
    private int repairUserId;
    @TableField(value = "checkUserId")
    private int checkUserId;
}

